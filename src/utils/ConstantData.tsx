import {navigate} from '../navigation/NavigationServices';
import {images} from './Images';
import {
  Containers,
  Inspections,
  Inventory,
  MessageBoard,
  SalesPlan,
} from './Svgs';

export const homeData = [
  {
    id: 1,
    img: <SalesPlan />,
    title: 'Sales Plan',
    onPress: () => navigate('SalesPlan'),
  },
  {
    id: 2,
    img: <Inventory />,
    title: 'Load Inventory',
    onPress: () => navigate('LoadInventory'),
  },
  {
    id: 3,
    img: <Containers />,
    title: 'Load Containers',
    onPress: () => navigate('LoadContainers'),
  },
  {
    id: 4,
    img: <Inspections />,
    title: 'Inspections',
    onPress: () => navigate('Inspections'),
  },
  {
    id: 5,
    img: <MessageBoard />,
    title: 'Message Board',
    onPress: () => navigate('MessageBoard'),
  },
];

export const dropdownData = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

export const orderFilterData = [
  {
    id: 1,
    title: 'All',
    isSelected: true,
  },
  {
    id: 2,
    title: 'Completed',
  },
  {
    id: 3,
    title: 'Pending',
  },
];

export const productItems = [
  {
    id: 1,
    title: 'CADBURY Caramilk 460ml',
    productId: '9300675016902',
    qty: 20,
    img: images.saleDummyImg,
  },
  {
    id: 2,
    title: 'CADBURY Caramilk 460ml',
    productId: '9300675016902',
    qty: 16,
    img: images.saleDummyImg,
  },
  {
    id: 3,
    title: 'CADBURY Caramilk 460ml',
    productId: '9300675016902',
    qty: 40,
    img: images.saleDummyImg,
  },
  {
    id: 4,
    title: 'CADBURY Caramilk 460ml',
    productId: '9300675016902',
    qty: 12,
    img: images.saleDummyImg,
  },
  {
    id: 5,
    title: 'CADBURY Caramilk 460ml',
    productId: '9300675016902',
    qty: 33,
    img: images.saleDummyImg,
  },
  {
    id: 6,
    title: 'CADBURY Caramilk 460ml',
    productId: '9300675016902',
    qty: 22,
    img: images.saleDummyImg,
  },
];
