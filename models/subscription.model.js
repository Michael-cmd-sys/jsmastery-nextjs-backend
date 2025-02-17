import mongoose from "mongoose";

const subscriptionSchema = new mongoose.schema({
    name: {
        type: String,
        required: [true, "Subscription name is required"],
        minLength: 2,
        maxLength: 20,
    },
    price: {
        type: Number,
        required: [true, "Subscription price is required"],
        min: [0, "price must be greater than or equal to 0"]
    },
    currency: {
        type: String,
        default: "GHS",
        enum: ["GHS", "GBP", "USD", "NGN", "EUR"],
    },
    frequency: {
        type: String,
        enum: ["daily", "weekly", "monthly", "yearly"],
    },
    category: {
        type: String,
        enum: ["aports", "news", "education", "finance", "entertainment", "politics", "technology", "lifestyle", "other"],
    },
    paymentMethod: {
        type: String,
        trim: true,
        required: [true, "subscription paymentMethod is required"]
    },
    status: {
        type: String,
        enum: ["active", "cancelled", "expired"],
        default: "active"
    },
    startDate: {
        type: Date,
        validate: {
            validator: ( _date ) => _date <= new Date(),
            message: "Subscription start date must be past date"
        }
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function( _date ) {
                return _date > this.startDate;
            } ,
            message: "Subscrption renewal date must be after start date"
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    }
}, { timestamps: true });

subscriptionSchema.pre("save", function( next ){
    if(!this.renewalDate){
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        }
        
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + this.renewalPeriods[this.frequency]);
    }
    
    if( this.renewalDate < new Date() ){
        this.status = "expired";
    }
    
    next();
})
const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;