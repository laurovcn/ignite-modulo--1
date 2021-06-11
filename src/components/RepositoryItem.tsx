interface RepositoryItemProps {
    repository: {
        id:number;
        login:string;
        avatar_url:string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <>
        <h1>Followers</h1>       
       
         <table>
            <thead>
                <th>ID</th>
                <th>login</th>
                <th>Avatar</th>
            </thead>
            <tbody>
            {RepositoryItem.map((repository) => {
            return (
              <tr key={repository.id}>
                <td>{repository.login}</td>              
                
                <td>{repository.avatar_url}</td>                
              </tr>
            );
          })}
            </tbody>
         </table>       

    </>               
    );
}