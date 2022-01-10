

export const setColorType = (type) => {
             switch (type) {
                case 'grass':
                    return "#27AE60";
                case 'poison':
                    return "#A569BD"
                case 'fire':
                    return "#FF0033";
                case 'water':
                    return "#2E86C1";
                case 'flying':
                    return "#566573";
                case 'bug':
                    return "#D35400";
                case 'normal':
                    return "#BDC3C7";
                case 'electric':
                    return "#F4D03F";
                case 'ground':
                    return "#6D4C41";
                case 'fairy':
                    return "#F06292";
                case 'fighting':
                    return "#990033";
                case 'psychic':
                    return "#6A1B9A";
                case 'rock':
                    return "#7F8C8D";
                case 'steel':
                    return "#626567";
                case 'ice':
                    return "#AED6F1";
                case 'ghost':
                    return "#73C6B6";
                case 'dragon':
                    return "#F39C12";
                case 'dark':
                    return "#000"
                default:
                    break;
        }

   
}
