



export const convertSabkToTitle = (sabkArray:string[]  = []) => {
    const convertSabk = (sabk: string) => {
        switch (sabk) {
            case 'ghazal':
                return 'غزل';
            case 'dobaiti':
                return 'دوبیتی';
            case 'shoar-no':
                return 'شعر نو';
            case 'masnavi':
                return 'مثنوی';
            case 'ghaside':
                return 'قصیده';
                case 'tarkibband':
                    return 'ترکیب بند';   
            // Add other cases here
            default:
                return sabk; // Return the original value if no match is found
        }
    }
  return sabkArray.map(convertSabk)
  };