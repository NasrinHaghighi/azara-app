



export const convertSabkToTitle = (sabkArray:string[]  = []) => {
    const convertSabk = (sabk: string) => {
        switch (sabk) {
            case 'ghazal':
                return '   غزل';
            case 'dobaiti':
                return '   دوبیتی';
            case 'shareno':
                return '  شعر نو';
            case 'masnavi':
                return '  مثنوی';
            case 'ghaside':
                return '  قصیده';
                case 'tarkibband':
                    return '  ترکیب بند';   
                    case 'chaharpare':
                    return '  چهارپاره'; 
                    case 'robaie':
                        return '  رباعی'; 
            // Add other cases here
            default:
                return sabk; // Return the original value if no match is found
        }
    }
    if (!Array.isArray(sabkArray)) {
        return [];
      }
    
  return sabkArray.map(convertSabk)
  };