import React, { useState } from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../Data.js";
import { Link } from "react-router-dom";

function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "E-mail", type: "email", width: 160 },
    {
      field: "status",
      headerName: "Status",
      // type: 'number',
      width: 160,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      width: 160,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/user/" + params.row.id}>
              <Edit className="userListEdit" />
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => {
              handleDelete(params.row.id)
              alert(`User with ID: ${params.row.id} has been deleted.`)}
              }
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default UserList;
