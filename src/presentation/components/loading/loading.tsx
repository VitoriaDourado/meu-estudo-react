import React, { memo } from "react";

const Loading: React.FC = () => {
  return (
    <header >
      <body >
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      </body>
    </header>
  );
};

export default memo(Loading);
