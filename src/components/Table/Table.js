import { BsArrowDownUp } from "react-icons/bs";
import './Table.css';

const Table = ({ goods, handleOpen}) => {

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID<BsArrowDownUp id='icon' /></th>
                    <th>Category<BsArrowDownUp id='icon' /></th>
                    <th>Name<BsArrowDownUp id='icon' /></th>
                    <th>Quantity<BsArrowDownUp id='icon' /></th>
                    <th>Price (₴)<BsArrowDownUp id='icon' /></th>
                    <th></th>
                </tr>
            </thead>
            {goods.map((data, item) => {
                return (
                    <tbody key={item}>
                        <tr>
                            <td>{item}</td>
                            <td>{data.Category}</td>
                            <td>{data.Name}</td>
                            <td>{data.Quantity}</td>
                            <td>{data.Price}</td>
                            <td id="last">
                                <button className="icon-pensil" />
                                <button className="icon-basket"
                                    onClick={(id) => {
                                        handleOpen(id = data.id)
                                    }} />
                            </td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    );
};

export default Table;