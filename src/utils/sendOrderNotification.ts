import axios from "axios";
import { CartItem } from "../models";

export const sendOrderNotification = async (name: string, address: string, cartItems: CartItem[], totalPrice: number, totalQuantaty: number) => {

    const botToken = process.env.BOT_TOKEN;
    // const chatId = '@portfolio_orders';
    const chatId = process.env.CHAT_ID;
    const cartDetails = cartItems.map(item => `${item.title} (Qty: ${item.quantity})`).join('\n');
    const message = `New order received! \n\nName: ${name}\nAddress: ${address} \n\n${cartDetails} \n\nTotal: ${totalQuantaty} items for $${Math.round(totalPrice)}`;
  
    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };