import type { Order, Product, Contact, Activity, Notification } from "../types";


export const orders: Order[] = [
  {
    id: '1',
    order_id: '#CM9801',
    user_name: 'Natali Craig',
    user_avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: new Date().toISOString(),
    status: 'In Progress',
  },
  {
    id: '2',
    order_id: '#CM9802',
    user_name: 'Kate Morrison',
    user_avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100',
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: new Date(Date.now() - 60000).toISOString(),
    status: 'Complete',
  },
  {
    id: '3',
    order_id: '#CM9803',
    user_name: 'Drew Cano',
    user_avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: new Date(Date.now() - 3600000).toISOString(),
    status: 'Pending',
  },
  {
    id: '4',
    order_id: '#CM9804',
    user_name: 'Orlando Diggs',
    user_avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: new Date(Date.now() - 86400000).toISOString(),
    status: 'Approved',
  },
  {
    id: '5',
    order_id: '#CM9805',
    user_name: 'Andi Lane',
    user_avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: new Date('2023-02-02').toISOString(),
    status: 'Rejected',
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'ASOS Ridley High Waist',
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    id: '2',
    name: 'Marco Lightweight Shirt',
    price: 128.50,
    quantity: 37,
    amount: 4754.50,
  },
  {
    id: '3',
    name: 'Half Sleeve  Shirt',
    price: 39.99,
    quantity: 64,
    amount: 2559.36,
  },
  {
    id: '4',
    name: 'Lightweight Jacket',
    price: 20.00,
    quantity: 184,
    amount: 3680.00,
  },
  {
    id: '5',
    name: 'Marco Shoes',
    price: 79.49,
    quantity: 64,
    amount: 1965.81,
  },
];

export const contacts: Contact[] = [
  {
    id: '1',
    name: 'Natali Craig',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '2',
    name: 'Drew Cano',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '3',
    name: 'Orlando Diggs',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '4',
    name: 'Andi Lane',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '5',
    name: 'Kate Morrison',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '6',
    name: 'Koray Okumus',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
];

export const activities: Activity[] = [
  {
    id: '1',
    user_name: 'You have a bug that needs...',
    user_avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    activity: 'You have a bug that needs...',
    timestamp: 'Just now',
  },
  {
    id: '2',
    user_name: 'Released a new version',
    user_avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    activity: 'Released a new version',
    timestamp: '59 minutes ago',
  },
  {
    id: '3',
    user_name: 'Submitted a bug',
    user_avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100',
    activity: 'Submitted a bug',
    timestamp: '12 hours ago',
  },
  {
    id: '4',
    user_name: 'Modified A data in Page X',
    user_avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
    activity: 'Modified A data in Page X',
    timestamp: 'Today, 11:59 AM',
  },
  {
    id: '5',
    user_name: 'Deleted a page in Project X',
    user_avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    activity: 'Deleted a page in Project X',
    timestamp: 'Feb 2, 2023',
  },
];

export const notifications: Notification[] = [
  {
    id: '1',
    icon_type: 'bug',
    message: 'You have a bug that needs...',
    timestamp: 'Just now',
  },
  {
    id: '2',
    icon_type: 'user',
    message: 'New user registered',
    timestamp: '59 minutes ago',
  },
  {
    id: '3',
    icon_type: 'bug',
    message: 'You have a bug that needs...',
    timestamp: '12 hours ago',
  },
  {
    id: '4',
    icon_type: 'broadcast',
    message: 'Andi Lane subscribed to you',
    timestamp: 'Today, 11:59 AM',
  },
];
