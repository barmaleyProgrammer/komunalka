export const UniqueServiceTypes = (data = []) => {
    const result = new Map();
    data
        .filter((item) => item.serviceType)
        .forEach((item) => {
            const serviceType = Number(item.serviceType);
            if (!result.has(serviceType)) {
                result.set(serviceType, serviceType);
            }
        });

    return Array.from(result.values());
};

export const UniqueProviders = (data = []) => {
    const result = new Map();
    data
        .filter((item) => item.serviceType && item.idFirme)
        .forEach((item) => {
            const serviceType = Number(item.serviceType);
            const providerId = Number(item.idFirme);
            const providerName = String(item.nameFirme).trim();
            if (!result.has(providerId)) {
                result.set(providerId, { value: providerId, serviceType, label: providerName });
            }
        });
    return Array.from(result.values());
};

export const UniqueCounters = (data = []) => {
    const result = new Map();
    data
        .filter((item) => item.serviceType && item.idFirme && item.abcounter)
        .forEach((item) => {
            const providerId = Number(item.idFirme);
            const serviceType = Number(item.serviceType);
            const counterId = Number(item.abcounter);
            if (!result.has(`${providerId}-${counterId}`)) {
                result.set(`${providerId}-${counterId}`, { value: counterId, serviceType, providerId, label: counterId });
            }
        });
    return Array.from(result.values());
};

export const filteredProviders = (providers, serviceType) => {
    return providers.filter((item) => {
        if (!serviceType) {
            return true;
        }
        return (Number(item.serviceType) === serviceType);
    });
};

export const filteredCounters = (counters, serviceType, provider) => {
    return counters.filter((item) => {
        if (!serviceType) {
            return true;
        }
        return (Number(item.serviceType) === serviceType);
    }).filter((item) => {
        if (!provider) {
            return true;
        } else {
            return (item.providerId === provider)
        }
    });
};

export const filteredData = (all, serviceType, provider, counter) => {
    return all.filter((item) => {
        if (!serviceType) {
            return true;
        }
        return (Number(item.serviceType) === serviceType);
    }).filter((item) => {
        if (!provider) {
            return true;
        } else {
            return (Number(item.idFirme) === provider)
        }
    }).filter((item) => {
        if (!counter) {
            return true;
        } else {
            return (Number(item.abcounter) === counter)
        }
    });
};
