
import HeaderPanel from "./HeaderPanel";
import { Outlet } from "react-router-dom";
import "./index.scss";

export default function PageLayoutShapeShop(props) {
    const {location} = props;

    return (
        <div className="shapeshop-site">
            <HeaderPanel location={location}/>
            <div className="shapeshop-main">
                <Outlet />
            </div>
        </div>
    );
}
