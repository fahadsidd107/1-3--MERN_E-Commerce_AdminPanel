import React from "react";
import "./WidgetLg.css";

export function Button({ type }) {
  return <button className={"widgetButton " + type}>{type}</button>;
}

function WidgetLg() {
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
        <TableRow
          name="Muhammad Fahad "
          date="10 December 2021"
          amount="Rs.1500"
          status="Approved"
          img="https://avatars.githubusercontent.com/u/61376412?s=400&u=bd4075255e4b63efdd5dc216a0375013fe7e0781&v=4"
        />
        <TableRow
          name="Ahad Siddiqui"
          date="10 December 2021"
          amount="Rs.1500"
          status="Declined"
          img="https://avatars.githubusercontent.com/u/61376412?s=400&u=bd4075255e4b63efdd5dc216a0375013fe7e0781&v=4"
        />
        <TableRow
          name="Noor Arslan"
          date="10 December 2021"
          amount="Rs.1500"
          status="Pending"
          img="https://avatars.githubusercontent.com/u/61376412?s=400&u=bd4075255e4b63efdd5dc216a0375013fe7e0781&v=4"
        />
        <TableRow
          name="Daniyal Nasir"
          date="10 December 2021"
          amount="Rs.1500"
          status="Approved"
          img="https://avatars.githubusercontent.com/u/61376412?s=400&u=bd4075255e4b63efdd5dc216a0375013fe7e0781&v=4"
        />
        
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
      <td className="widgetLgAmount">{amount}</td>
      <td className="widgetLgStatus">
        <Button type={status} />
      </td>
    </tr>
  );
}

export default WidgetLg;
