import { Briefcase } from 'lucide-react'; // Optional icon library

const Demo = () => {
  return (
    <div className="relative flex justify-center">
      {/* Vertical Line */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-gray-700" />

      {/* Circle with Icon */}
      <div className="relative z-10 ">
        <Briefcase className="text-white w-5 h-5" />
      </div>
    </div>
  );
};

export default Demo;
