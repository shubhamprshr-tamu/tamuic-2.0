import React from 'react';

interface TableColumn {
  key: string;
  label: string;
}

interface TableDataItem {
  id: number;
  [key: string]: string | number;
}

interface TableComponentProps {
  data: TableDataItem[];
  columns: TableColumn[];
}

const SuggestionTableComponent: React.FC<TableComponentProps> = ({ data, columns }) => {
  const handleLocalityTableClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const id = parseInt(event.currentTarget.id);
    if (!isNaN(id)) {
      console.log('Clicked on locality:', id);
    }
  };

  const handleLocalityEdit = (id: number) => {
    console.log(`Edit locality with ID: ${id}`);
  };

  return (
    <table id="suggestionTable" className="resultsTable sortable">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
          <th>Modify</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td key={column.key} id={column.key}>
                {column.key === 'namedPlace' ? (
                  <a href="#" id={item.id.toString()} onClick={handleLocalityTableClick}>
                    {item[column.key]}
                  </a>
                ) : (
                  item[column.key]
                )}
              </td>
            ))}
            <td>
              <button onClick={() => handleLocalityEdit(item.id)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SuggestionTableComponent;
