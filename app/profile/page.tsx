import { getUserByEmail } from "../lib/data";
import DashNav from "../ui/Dashboard/DashNav";
import DeleteAccountCard from "../ui/Profile/DeleteAccountCard";
import EditProfileForm from "../ui/Profile/EditProfileForm";

export default async function Profile() {
  //get the current user
  const currentUser = await getUserByEmail();

  //get the user's full name
  const fullName = currentUser.name;
  const email = currentUser.email;
  const company = currentUser.company;

  //separate first and last name
  let firstName = "";
  let lastName = "";

  if (fullName) {
    const [first, ...rest] = fullName.split(" ");
    firstName = first;
    lastName = rest.join(" ");
  }

  return (
    <>
      <DashNav />
      {/* form */}
      <EditProfileForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        company={company}
      />
      {/* delete account card */}
      <div className="p-4">
        <DeleteAccountCard />
      </div>
    </>
  );
}
