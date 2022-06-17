

export interface BlogProps {
  id: number | string;
  title: string;
  category: string;
  description: string;
  published: boolean;
  createdAt?: string;
  updatedAt?: string;
  tags: string[];
  authors?: UserProps[];
}

export interface UserProps {
  id: number
  username: string;
  fullname?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  password?: string;
  password2?: string;
  role: string;
  blogs?: BlogProps[];
}

export interface ProfileProps {
  profile_id: number | string
  bio: string;
  user_id: string;
  user: UserProps;
}

// type Props = {
//   id: number | string
// }
