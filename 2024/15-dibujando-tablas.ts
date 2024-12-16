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

drawTable([
  { name: "Alice", city: "London" },
  { name: "Bob", city: "Paris" },
  { name: "Charlie", city: "New York" },
]);
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: "Doll", quantity: 10 },
  { gift: "Book", quantity: 5 },
  { gift: "Music CD", quantity: 1 },
]);
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
