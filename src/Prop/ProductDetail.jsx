import React from "react";
export default function ProductDetail(props) {
  const { product } = props;
  return (
    <div className="row mt-5">
      <div className="col-sm-4">
        <h3 className="text-center">{product.name}</h3>
        <img src={product.image} alt="" width="100%" height="400px" />

      </div>
      <div className="col-sm-8">
          <h3>Thông số kĩ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{product.alias}</td>
              </tr>
              <tr>
                  <td>Hệ điều hành</td>
                  <td>{product.alias}</td>
              </tr>
              <tr>
                  <td>Camera Trước</td>
                  <td>{product.description}</td>
              </tr>
              <tr>
                  <td>Camera Sau</td>
                  <td>{product.shortDescription}</td>
              </tr>
              <tr>
                  <td>ram</td>
                  <td>{product.quantity}</td>
              </tr>
              <tr>
                  <td>rom</td>
                  <td>{product.id}</td>
              </tr>
              <tr>
                  <td>Giá bán</td>
                  <td>{product.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}
