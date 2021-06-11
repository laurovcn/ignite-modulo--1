import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

interface Repository {
    avatar_url: string;
    id: string;
    login: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/lvneto/followers')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <section>
            <h1>Lista de repositórios</h1>
            <table>
                <thead>
                    <tr>
                        <th>avatar_url</th>
                        <th>id</th>
                        <th>login</th>
                    </tr>
                </thead>
                <tbody>
                    {repositories.map(repository => (
                        <tr key= {repository.id} >
                            <td><img width="100px" src={repository.avatar_url}/></td>
                            <td>{repository.id}</td>
                            <td>{repository.login}</td>
                        </tr>
                    ))}
                </tbody>
            </table>          
        </section>
    );
}