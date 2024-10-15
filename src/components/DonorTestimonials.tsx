import React from 'react';

const testimonials = [
  {
    name: 'Alice Johnson',
    message: 'Donating to this platform has been an amazing experience. I can track exactly where my money goes!',
    avatar: 'https://via.placeholder.com/50', // Replace with actual images
  },
  {
    name: 'Bob Smith',
    message: 'I love knowing that my donations help directly where it matters most.',
    avatar: 'https://via.placeholder.com/50',
  },
];

const DonorTestimonials: React.FC = () => {
  return (
    <div className="bg-[#F5F1E3] rounded-lg p-6 shadow-lg text-[#333]">
      <h2 className="text-xl font-semibold text-[#6D4C41] mb-4">Donor Testimonials</h2>
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="rounded-full w-12 h-12 object-cover"
            />
            <div>
              <h3 className="text-lg font-bold text-[#6D4C41]">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorTestimonials;
