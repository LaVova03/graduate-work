import { IoIosArchive } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import { BsArrowDownUp } from "react-icons/bs";
import './Table.css';

const Table = ({ goods }) => {
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
            {goods.map(data => {
                return (
                    <tbody key={data.id}>
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.Category}</td>
                            <td>{data.Name}</td>
                            <td>{data.Quantity}</td>
                            <td>{data.Price}</td>
                            <td id="last">
                                <IoIosArchive />
                                <IoMdCreate />
                            </td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    );
};

export default Table;