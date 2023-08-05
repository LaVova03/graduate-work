import { IoIosArchive } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import { BsArrowDownUp } from "react-icons/bs";
import './Table.css';

const Table = () => {
    return (
        <table className='table'>
            <thead>
                <tr id='first'>
                    <th>ID<BsArrowDownUp id='icon' /></th>
                    <th>Category<BsArrowDownUp id='icon' /></th>
                    <th>Name<BsArrowDownUp id='icon' /></th>
                    <th>Quantity<BsArrowDownUp id='icon' /></th>
                    <th>Price (₴)<BsArrowDownUp id='icon' /></th>
                    <th></th>
                </tr>
            </thead>
            <tbody id='second'>
                <td>0</td>
                <td>PC</td>
                <td>Lenovo Y50-70</td>
                <td>5</td>
                <td>25,000.00</td>
                <td id="last">
                    <IoIosArchive />
                    <IoMdCreate />
                </td>
            </tbody>
            <tbody id='therd'>
                <td>1</td>
                <td>Clothes</td>
                <td>Nike M Nk Df Acd21</td>
                <td>22</td>
                <td>4,000.00</td>
                <td id="last">
                    <IoIosArchive />
                    <IoMdCreate />
                </td>
            </tbody>
            <tbody id='second'>
                <td>2</td>
                <td>Plumbing</td>
                <td>CERSANIT MITO 17</td>
                <td>1337</td>
                <td>5,000.00</td>
                <td id="last">
                    <IoIosArchive />
                    <IoMdCreate />
                </td>
            </tbody>
        </table>
    );
};

export default Table;