import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";

const CustomDataTable = ({ data, columns, loading }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }, // Initial pagination settings
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div>
      {data?.length > 1 && (
        <div className="w-[300px] ml-auto p-2 border rounded-xl">
          <input
            className={`w-full outline-none`}
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
          />
        </div>
      )}

      <div className="overflow-x-auto">
        <table
          className="min-w-full bg-white  border-gray-200"
          {...getTableProps()}
        >
          <thead className="text-left">
            <tr>
              {columns?.map((col, index) => (
                <th className={`${col?.Header} py-2 px-4`} key={index}>
                  {col?.Header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=" font-normal text-input" {...getTableBodyProps()}>
            {loading && data?.length < 1 ? (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: "center" }}>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    bg="white"
                  >
                    <img src="/loader.svg" />
                  </div>
                </td>
              </tr>
            ) : data?.length > 0 ? (
              <>
                {page.map((row, index) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className="hover:bg-gray-50 cursor-pointer font-normal text-input"
                      key={index}
                    >
                      {row.cells.map((cell, index) => (
                        <td
                          className="py-4 px-4 border-b text-input"
                          {...cell.getCellProps()}
                          key={index}
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </>
            ) : (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: "center" }}>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    bg="white"
                  >
                    <h2 className="text-danger text-center">No Record Found</h2>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {data?.length >= 10 && (
        <div className="flex justify-between items-center mt-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <span>Page 1 of 2</span>
          <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomDataTable;
