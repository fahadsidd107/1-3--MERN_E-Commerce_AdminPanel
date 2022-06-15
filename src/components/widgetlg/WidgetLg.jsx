import React from "react";
import "./WidgetLg.css";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export function Button({ type }) {
  return <button className={"widgetButton " + type}>{type}</button>;
}

function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("order/");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  return (
    <div className="WidgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order) => (
          <TableRow
            name={order.userId}
            date={order.createdAt}
            amount={order.amount}
            status={order.status}
            img=""
          />
        ))}
      </table>
    </div>
  );
}

export function TableRow({ img, name, date, amount, status }) {
  return (
    <tr className="widgetLgTr">
      <td className="widgetLgUser">
        <img src={img} className="widgetLgImage" />
        <span className="widgetLgName">{name}</span>
      </td>
      <td className="widgetLgDate">{date}</td>
      <td className="widgetLgAmount">Rs.{amount}</td>
      <td className="widgetLgStatus">
        <Button type={status} />
      </td>
    </tr>
  );
}

export default WidgetLg;
