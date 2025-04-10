import React from 'react';

interface TableColumn {
  key: string;
  label: string;
}

interface TableData {
  [key: string]: string | number;
}

interface CssTableProps {
  columns: TableColumn[];
  data: TableData[];
  showEdit?: boolean;
}

const CssTable: React.FC<CssTableProps> = ({ columns, data, showEdit = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full h-full">
      <div className="overflow-y-auto h-full">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky top-0">
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col" className="px-6 py-3">
                  {column.label}
                </th>
              ))}
              {showEdit && (
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`bg-white ${
                  index !== data.length - 1 ? 'border-b' : ''
                } border-gray-200 hover:bg-gray-50`}
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4">
                    {column.key === 'status' ? (
                      <span
                        className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                          item[column.key] === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {item[column.key]}
                      </span>
                    ) : (
                      item[column.key]
                    )}
                  </td>
                ))}
                {showEdit && (
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CssTable;
