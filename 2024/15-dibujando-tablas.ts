function drawTable(data: Array<Record<string, string | number>>): string {
  const columns: string[] = Object.keys(data[0]);
  const columnWidths: { [key: string]: number } = {};

  // Calcular el ancho de cada columna
  for (let column of columns) {
    columnWidths[column] = Math.max(column.length, ...data.map((row) => String(row[column]).length));
  }

  // Generar la fila separadora
  const separator: string = "+-" + columns.map((column) => "-".repeat(columnWidths[column])).join("-+-") + "-+";

  // Generar la fila de encabezado con la primera letra en mayúscula
  const headerRow: string =
    "| " +
    columns
      .map((column) => {
        const capitalizedColumn: string = column.charAt(0).toUpperCase() + column.slice(1);
        return capitalizedColumn.padEnd(columnWidths[column]);
      })
      .join(" | ") +
    " |";

  // Generar las filas de datos
  const dataRows: string[] = data.map((row) => {
    return "| " + columns.map((column) => row[column].toString().padEnd(columnWidths[column])).join(" | ") + " |";
  });

  // Combinar todo en una tabla
  const table: string[] = [separator, headerRow, separator, ...dataRows, separator];
  return table.join("\n");
}

/*
Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

Tiene una cabecera con el nombre de la columna.
El nombre de la columna pone la primera letra en mayúscula.
Cada fila debe contener los valores de los objetos en el orden correspondiente.
Cada valor debe estar alineado a la izquierda.
Los campos dejan siempre un espacio a la izquierda.
Los campos dejan a la derecha el espacio necesario para alinear la caja.
Mira el ejemplo para ver cómo debes dibujar la tabla:
*/

console.log(
  drawTable([
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
    { name: "Charlie", city: "New York" },
  ])
);
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

console.log(
  drawTable([
    { gift: "Doll", quantity: 10 },
    { gift: "Book", quantity: 5 },
    { gift: "Music CD", quantity: 1 },
  ])
);
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
