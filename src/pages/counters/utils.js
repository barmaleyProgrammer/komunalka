export const UniqueServiceTypes = (data = []) => {
    const unique = new Map();
    data.filter((item) => item.serviceType).map((item) => {
        const id = Number(item.serviceType);
        if (!unique.has(id)) {
            unique.set(id, id);
        }
    });

    return Array.from(unique.values());
}

export const UniqueProviders = (data = [], serviceType = '') => {
    const unique = new Map();
    data.filter((item) => {
        if (!item.idFirme) {
            return false;
        }
        if (!serviceType) {
            return true;
        }
        return (Number(item.serviceType) === serviceType);
    }).map((item) => {
        const id = Number(item.idFirme);
        if (!unique.has(id)) {
            unique.set(id, item.nameFirme);
        }
    });

    return Array.from(unique).map(([value, label]) => ({ value, label }));
}
