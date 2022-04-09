export default function Holdings({ sr, units, price }) {
  return (
    <tr style={{ fontSize: 15 }}>
      <td>{sr}</td>
      <td>{units}</td>
      <td>{price}</td>
      <td>
        <button>X</button>
      </td>
    </tr>
  );
}