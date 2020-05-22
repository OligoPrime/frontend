import Orders from "./pages/Orders";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Admin from "./pages/Admin";
import AddTwoNew from "./pages/adding/primers/AddTwoNew";
import AddOneNew from "./pages/adding/primers/AddOneNew";
import AddTwoOld from "./pages/adding/primers/AddTwoOld";
import AddOneOld from "./pages/adding/primers/AddOneOld";
import EditPrimer from "./pages/editing/EditPrimer";
import AddUser from "./pages/adding/users/AddUser";
import PrimerDetails from "./pages/PrimerDetails";

const pageList = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
    },
    {
        name: 'Orders',
        path: '/orders',
        component: Orders,
    },
    {
        name: 'History',
        path: '/history',
        component: History,
    },
    {
        name: 'Admin',
        path: '/admin',
        component: Admin,
    },
    {
        name: 'AddTwo',
        path: '/add-two-old',
        component: AddTwoOld,
    },
    {
        name: 'AddOne',
        path: '/add-one-old',
        component: AddOneOld,
    },
    {
        name: 'AddTwoNew',
        path: '/add-two-new',
        component: AddTwoNew,
    },
    {
        name: 'AddOneNew',
        path: '/add-one-new',
        component: AddOneNew,
    },
    {
        name: 'EditPrimer',
        path: '/edit',
        component: EditPrimer,
    },
    {
        name: 'AddUser',
        path: '/add-user',
        component: AddUser,
    },
    {
        name: 'PrimerDetails',
        path: '/primer-details',
        component: PrimerDetails,
    },
];

export default pageList;
