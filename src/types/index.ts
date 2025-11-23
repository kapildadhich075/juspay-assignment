export interface Order {
    id: string;
    order_id: string;
    user_name: string;
    user_avatar: string;
    project: string;
    address: string;
    date: string;
    status: 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected';
  }
  
  export interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
    amount: number;
  }
  
  export interface Contact {
    id: string;
    name: string;
    avatar: string;
  }
  
  export interface Activity {
    id: string;
    user_name: string;
    user_avatar: string;
    activity: string;
    timestamp: string;
  }
  
  export interface Notification {
    id: string;
    icon_type: string;
    message: string;
    timestamp: string;
  }
  