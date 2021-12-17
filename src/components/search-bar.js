import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

export const SearchBar = () => (
    <InputGroup >
        <InputGroup.Text>
            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                <option value="0">All</option>
                <option value="1">Movies</option>
                <option value="2">Genres</option>
                <option value="3">People</option>
            </Form.Select>
        </InputGroup.Text>
        <Form.Control type="text" required placeholder="Search BMdb" />
        <InputGroup.Text>
            <Button type="submit">Search</Button>
        </InputGroup.Text>
    </InputGroup>
);