import React from "react";

function QuotesSection() {
  return (
    <div className="p-20 lg:px-60 bg-secondary-background-color">
      <div className="w-full px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded-lg shadow-lg">
        <div className="w-full pt-1 pb-5">
          <div className="w-20 mx-auto -mt-16 overflow-hidden rounded-full shadow-lg ">
            <img src="/assets/nairz.png" alt="" />
          </div>
        </div>
        <div className="w-full mb-10">
          <div className="h-3 text-3xl leading-tight text-left text-primary-card-color">
            “
          </div>
          <p className="px-5 text-sm text-center text-gray-600">
            Für Lawinenkommissionen könnte diese technisch ausgestattete Sonde
            sicherlich interessant sein, weil sie Arbeitsschritte erleichtert
            und verkürzt. Die beiden haben da eine richtig spannende Sache
            entwickelt.
          </p>
          <div className="h-3 -mt-3 text-3xl leading-tight text-right text-primary-card-color">
            ”
          </div>
        </div>
        <div className="w-full">
          <p className="font-bold text-center text-primary-card-color text-md">
            Patrick Nairz
          </p>
          <p className="text-xs text-center text-gray-500">
            Lawinenwarndienst Tirol
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuotesSection;
