import water from '../../img/logo_counters/water.svg';
import gas from '../../img/logo_counters/gas.svg';
import electric from '../../img/logo_counters/electric.svg';
import warm from '../../img/logo_counters/warm.svg';

const serviceTypeIcons = [
    { id: 1, icon: warm },
    { id: 2, icon: electric },
    { id: 3, icon: gas },
    { id: 4, icon: water },
];

const ServiceTypes = ({serviceType, service, setService}) => {
    return (
        <div>
            <p className="text-center">Оберіть тип послуги</p>
            <div className="grid grid-cols-4 gap-4">
                {
                    serviceType.map((item, key) => {
                        const icon = serviceTypeIcons.find((i) => i.id == item.id).icon;
                        return (
                            <div key={key} className="mb-4 mx-auto text-center">
                                <img className={` h-20 w-20 ${service === item.id ? 'iconActive':'iconPassive'}`} src={icon} onClick={() => setService(item.id)} alt=""/>
                                <span className="text-xs lowercase">{item.name}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ServiceTypes;