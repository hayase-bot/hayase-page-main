import { redirect } from "next/navigation";

const inviteURL = 'https://discord.com/oauth2/authorize?client_id=1282545480630272010&permissions=2147493904&integration_type=0&scope=bot';

function Invite() {
  return redirect(inviteURL);
}

export default Invite;