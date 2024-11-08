import { useLocation } from "react-router-dom";
import QueryString from 'query-string'
const EventDetails = () => {

    console.log(useLocation());
    const {search} = useLocation()
    // const results = QueryString.parse(search)
    const {sortBy, approve} = QueryString.parse(search)
    console.log(sortBy, approve)
    return (  <div>
            <h1>Event Details</h1>

    </div>);
}
 
export default EventDetails;