type CustomerData = {
  customerName: string;
  customerJob: string;
  customerImage: string;
  customerRating: number;
  customerReview: string;
};

const customersData: CustomerData[] = [
  {
    customerName: "Jane Doe",
    customerJob: "Software Engineer",
    customerImage: "/customer1.png",
    customerRating: 4,
    customerReview: "Great service and friendly staff!",
  },
  {
    customerName: "Emily Johnson",
    customerJob: "Product Manager",
    customerImage: "/customer2.png",
    customerRating: 5,
    customerReview: "Great experience! Highly recommend to others.",
  },
  {
    customerName: "John Doe",
    customerJob: "UX Designer",
    customerImage: "/customer3.png",
    customerRating: 3,
    customerReview:
      "Great ambience and helpful staff. I had a wonderful experience.",
  },
  {
    customerName: "Sarah Lee",
    customerJob: "Marketing Specialist",
    customerImage: "/customer4.png",
    customerRating: 4,
    customerReview:
      "Nice place with a great atmosphere. The staff was very attentive and made sure we had everything we needed.",
  },
  {
    customerName: "Michael Brown",
    customerJob: "Data Analyst",
    customerImage: "/customer5.png",
    customerRating: 5,
    customerReview:
      "I had a fantastic time here! The food was delicious and the service was top-notch. I would definitely come back again.",
  },
];

export default customersData;
