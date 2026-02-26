import provider01 from '../../../assets/providers/provider-01.png';
import provider02 from '../../../assets/providers/provider-02.png';
import provider03 from '../../../assets/providers/provider-03.png';
import provider04 from '../../../assets/providers/provider-04.png';
import provider05 from '../../../assets/providers/provider-05.png';
import provider06 from '../../../assets/providers/provider-06.png';
import provider07 from '../../../assets/providers/provider-07.png';
import provider08 from '../../../assets/providers/provider-08.png';
import provider09 from '../../../assets/providers/provider-09.png';
import provider10 from '../../../assets/providers/provider-10.png';
import provider11 from '../../../assets/providers/provider-11.png';
import provider12 from '../../../assets/providers/provider-12.png';
import provider13 from '../../../assets/providers/provider-13.png';
import provider14 from '../../../assets/providers/provider-14.png';
import provider15 from '../../../assets/providers/provider-15.png';
import provider16 from '../../../assets/providers/provider-16.png';
import provider17 from '../../../assets/providers/provider-17.png';
import provider18 from '../../../assets/providers/provider-18.png';
import provider19 from '../../../assets/providers/provider-19.png';
import provider20 from '../../../assets/providers/provider-20.png';

const providers = [
  provider01, provider02, provider03, provider04, provider05,
  provider06, provider07, provider08, provider09, provider10,
  provider11, provider12, provider13, provider14, provider15,
  provider16, provider17, provider18, provider19, provider20,
];

const Providers = () => {
  return (
    <div className="py-8 md:py-12 bg-[#0a0e13] overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {[...providers, ...providers].map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-3 md:px-4">
              <img
                src={logo}
                alt="Provider"
                className="h-8 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Providers;
