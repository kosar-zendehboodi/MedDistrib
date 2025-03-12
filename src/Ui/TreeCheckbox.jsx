import React, { useState } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { FaChevronRight, FaChevronDown, FaFolder, FaFolderOpen, FaFile } from 'react-icons/fa';

const TreeCheckbox = () => {
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);

    const nodes = [
        {
            value: 'tehran',
            label: 'تهران',
            children: [
                { value: 'islamshahr', label: 'اسلامشهر' },
                {
                    value: 'robatkarim',
                    label: 'رباط کریم',
                    children: [
                        { value: 'mantaghe2', label: 'منطقه دو' }
                    ],
                },
            ],
        },
        {
            value: 'esfahan',
            label: 'اصفهان',
        },
        {
            value: 'gilan',
            label: 'گیلان',
            children: [
                {
                    value: 'rasht',
                    label: 'رشت',
                    children: [
                        { value: 'noor', label: 'نور' }
                    ],
                },
            ],
        },
    ];

    return (
        <div className="p-4">
            <CheckboxTree
                nodes={nodes}
                checked={checked}
                expanded={expanded}
                onCheck={setChecked}
                onExpand={setExpanded}
                icons={{
                    check: <input type="checkbox" checked={true} />,
                    uncheck: <input type="checkbox" />,
                    halfCheck: <input type="checkbox" indeterminate />,
                    expandClose: <FaChevronRight />, 
                    expandOpen: <FaChevronDown />, 
                    parentClose: <FaFolder />, 
                    parentOpen: <FaFolderOpen />, 
                    leaf: <FaFile />
                }}
                showCheckbox={true}
            />
        </div>
    );
};

export default TreeCheckbox;

