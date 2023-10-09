import React from 'react';


const CheckPassword = ({smallChars, bigChars, digitChars, numbers}) => {
    return (
        <div className="checkPassword border border-[#E7E7E7] rounded-md pl-2 flex flex-col text-xs font-light w-72 h-52">
            <p className="text-sm font-medium p-4">
                Для захисту даних необхідно придумати безпечний пароль.<br/>
                Він повинен містити:
            </p>
            <div className="px-4 space-y-2">
                <div className="pt-1 flex">
                    <span className="pointer">
                        <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3" cy="3.5" r="3" fill={smallChars ? '#1F9A14' : '#E11A00'}/>
                        </svg>
                    </span>
                    Малі літери
                </div>
                <div className="pt-1 flex">
                    <span className="pointer">
                        <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3" cy="3.5" r="3" fill={bigChars ? '#1F9A14' : '#E11A00'}/>
                        </svg>
                    </span>
                    Великі літери
                </div>
                <div className="pt-1 flex">
                    <span className="pointer">
                        <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3" cy="3.5" r="3" fill={digitChars ? '#1F9A14' : '#E11A00'}/>
                        </svg>
                    </span>
                    Цифри
                </div>
                <div className="pt-1 flex">
                    <span className="pointer">
                        <svg width="6" height="7" viewBox="0 0 6 7" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3" cy="3.5" r="3" fill={numbers ? '#1F9A14' : '#E11A00'}/>
                        </svg>
                    </span>
                    8 і більше символів
                </div>
            </div>
        </div>
    )
}
export default CheckPassword;