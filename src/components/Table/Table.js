import './Table.css';

const Table = ({ goods, handleOpen, changeShake }) => {

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID<button className='icon_shake' onClick={changeShake} /></th>
                    <th>Category<button className='icon_shake' onClick={changeShake} /></th>
                    <th>Name<button className='icon_shake' onClick={changeShake} /></th>
                    <th>Quantity<button className='icon_shake' onClick={changeShake} /></th>
                    <th>Price (₴)<button className='icon_shake' onClick={changeShake} /></th>
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