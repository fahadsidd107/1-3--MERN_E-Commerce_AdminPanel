import React,{useState} from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Edit, DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../Data";
import { Link } from "react-router-dom";
import './ProductList.css'
function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "productname",
      headerName: "Productname",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", type: "text", width: 160 },
    {
      field: "status",
      headerName: "Status",
      // type: 'number',
      width: 160,
    },
    {
      field: "price",
      headerName: "Price",
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
            <Link to={"/productEdit/" + params.row.id}>
              <Edit className="productListEdit" />
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() =>{
              handleDelete(params.row.id)
              alert(`Item with ID: ${params.row.id} has been deleted.`)}
              }
            />
          </div>
        );
      },
    },
  ];






  return (
    <div className='productList'>
            <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
    </div>
  )
}

export default ProductList