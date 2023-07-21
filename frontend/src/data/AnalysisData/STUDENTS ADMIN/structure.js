import { GridColDef } from "@mui/x-data-grid";

const columns01: GridColDef = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'email_id', headerName: 'Email', width: 200 },
  { field: 'student_name', headerName: 'Student Name', width: 200 },
  { field: 'students_class', headerName: 'Class', width: 150 },
  { field: 'course', headerName: 'Course', width: 200 },
  { field: 'institution_name', headerName: 'Institution', width: 200 },
  { field: 'nomination_category', headerName: 'Nomination Category', width: 200 },
  { field: 'recommendation_note', headerName: 'Recommendation Note', width: 300 },
  {
    field: 'supportings', headerName: 'Supportings', width: 200, renderCell: (params) => {
      return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
];

export default columns01