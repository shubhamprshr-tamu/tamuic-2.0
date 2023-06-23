import React from 'react';

interface TableDataItem {
    id: number;
    namedPlace: string;
    rtnp: string;
    localityName: string;
    county: string;
    state: string;
    country: string;
    verified: string;
    verbLat: string;
    verbLon: string;
    verbElev: string;
    remarks: string;
}

interface TableComponentProps {
    data: TableDataItem[];
}

const SuggestionTableComponent : React.FC<TableComponentProps> = ({ data }) => {
    const localityTableClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const id = parseInt(event.currentTarget.id);
        if (!isNaN(id)) {
          // Handle click event with the correct id
          console.log('Clicked on locality:', id);
        }
    };
    const localityEdit = (id: number) => {
        // Logic for editing the locality
        console.log(`Edit locality with ID: ${id}`);
    };
    return (
    <table id="suggestionTable" className="resultsTable sortable">
        <thead>
            <tr>
                <th>ID</th>
                <th>NamedPlace</th>
                <th>RTNP</th>
                <th>LocalityName</th>
                <th>County</th>
                <th>State</th>
                <th>Country</th>
                <th>Verified</th>
                <th>VerbLat</th>
                <th>VerbLon</th>
                <th>VerbElev</th>
                <th>Remarks</th>
                <th>Modify</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td id="NamedPlace">
                    <a href="#" id={item.id.toString()} onClick={(e) => localityTableClick(e)}>
                    {item.namedPlace}
                    </a>
                </td>
                <td id="RTNP">{item.rtnp}</td>
                <td id="LocalityName">{item.localityName}</td>
                <td id="County">{item.county}</td>
                <td id="State">{item.state}</td>
                <td id="Country">{item.country}</td>
                <td id="Verified">{item.verified}</td>
                <td id="VerbLat">{item.verbLat}</td>
                <td id="VerbLon">{item.verbLon}</td>
                <td id="VerbElev">{item.verbElev}</td>
                <td id="suggestionRemarks">
                    <div className="remarks">{item.remarks}</div>
                </td>
                <td>
                    <button onClick={() => localityEdit(item.id)}>Edit</button>
                </td>
                </tr>
            ))}
        </tbody>
    </table>
    );
};

export default SuggestionTableComponent;
