import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
export const PlaceOrder = async ({
  orderline,
  address,
  taxRate,
  tip,
  coupanCode,
  isAvoidColling,
  customerId,
  orderDate,
  orderTime,
  originalPrice
}) => {
  const OrderDto = {
    orderline,
    address,
    taxRate,
    tip,
    coupanCode,
    isAvoidColling,
    customerId,
    orderDate,
    orderTime,
    phoneNo:"8999523116",
    totalPrice:originalPrice
  };

  
  try {
    const response = await axios.post("http://localhost:8081/api/orders", OrderDto);
    console.log("OrderDto", response);
     openRazorpayCheckout(response.data,"chetan","vhanmanechetan17@gmail.com",OrderDto.phoneNo);
    // return 
  } catch (error) {
    console.error("Error creating service:", error);
    throw error;
  }
};
// Example function to open Razorpay Checkout using the returned data
export const openRazorpayCheckout = (orderData, customerName, customerEmail,customerPhoneNumber) => {
  const options = {
    key: "rzp_test_sW1clMdYhkU0nx", // Your Razorpay key
    amount: orderData.amount, // amount in paise (integer)
    currency: orderData.currency,
    order_id: orderData.razorpayOrderId,
    name: "CleanZCare",
    description: "Order Payment",
    prefill: {
      name: customerName,
      email: customerEmail,
      contact: customerPhoneNumber,  
    },
    handler: async function (response) {
      // On successful payment, send payment details to backend for verification
      try {
        toast.promise(
         axios.post("http://localhost:8081/api/orders/verify-payment", {
          razorpayOrderId: response.razorpay_order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpaySignature: response.razorpay_signature,
        }),
            {
              loading: 'Placing your order...',
              success: (data) => {
                return `Order placed successfully!`;
              },
              error: (err) => {
                console.error('Order placement failed:', err);
                return 'Failed to place order. Please try again.';
              },
            }
          );
        // Optionally redirect user or update UI here
      } catch (error) {
        alert("Payment verification failed: " + error.message);
      }
    },
    modal: {
      ondismiss: function () {
        alert("Payment popup closed");
      },
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};

export const GetOrder=async()=>{
  try {
    const response = await axios.get("http://localhost:8081/api/orders");
    // console.log("OrderDto", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating service:", error);
    throw error;
  }
}
