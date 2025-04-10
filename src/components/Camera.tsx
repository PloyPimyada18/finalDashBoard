import React from "react";
interface CameraProps {
  src: string;
}

const Camera: React.FC<CameraProps> = ({ src }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Camera Feed</h3>
      </div>
      <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200">
        <img
          src={src}
          alt="Camera Feed"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Camera;
