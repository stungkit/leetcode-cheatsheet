import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs/Tabs'

import DFSrecursivePY from '@code/python/binary_tree/dfs_recursive.py?raw'
import DFSiterativePY from '@code/python/binary_tree/dfs_iterative.py?raw'
import BFSPY from '@code/python/binary_tree/bfs.py?raw'

import DFSrecursiveJS from '@code/javascript/binary_tree/dfs_recursive.js?raw'
import DFSiterativeJS from '@code/javascript/binary_tree/dfs_iterative.js?raw'
import BFSJS from '@code/javascript/binary_tree/bfs.js?raw'

import DFSrecursiveJAVA from '@code/java/binary_tree/dfs_recursive.java?raw'
import DFSiterativeJAVA from '@code/java/binary_tree/dfs_iterative.java?raw'
import BFSJAVA from '@code/java/binary_tree/bfs.java?raw'

import DFSrecursiveCPP from '@code/cpp/binary_tree/dfs_recursive.cpp?raw'
import DFSiterativeCPP from '@code/cpp/binary_tree/dfs_iterative.cpp?raw'
import BFSCPP from '@code/cpp/binary_tree/bfs.cpp?raw'

import DFSrecursiveRUBY from '@code/ruby/binary_tree/dfs_recursive.rb?raw'
import DFSiterativeRUBY from '@code/ruby/binary_tree/dfs_iterative.rb?raw'
import BFSRUBY from '@code/ruby/binary_tree/bfs.rb?raw'

import DFSrecursiveLUA from '@code/lua/binary_tree/dfs_recursive.lua?raw'
import DFSiterativeLUA from '@code/lua/binary_tree/dfs_iterative.lua?raw'
import BFSLUA from '@code/lua/binary_tree/bfs.lua?raw'

export default function BinaryTree() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Binary Tree</h2>
            <section id="tree-dfs-recursive">
                <Tabs title="DFS (recursive)">
                    <Tabs.Tab code={DFSrecursivePY} language="python" />
                    <Tabs.Tab code={DFSrecursiveJS} language="javascript" />
                    <Tabs.Tab code={DFSrecursiveJAVA} language="java" />
                    <Tabs.Tab code={DFSrecursiveCPP} language="cpp" />
                    <Tabs.Tab code={DFSrecursiveRUBY} language="ruby" />
                    <Tabs.Tab code={DFSrecursiveLUA} language="lua" />
                </Tabs>
            </section>
            <section id="tree-dfs-iterative">
                <Tabs title="DFS (iterative)">
                    <Tabs.Tab code={DFSiterativePY} language="python" />
                    <Tabs.Tab code={DFSiterativeJS} language="javascript" />
                    <Tabs.Tab code={DFSiterativeJAVA} language="java" />
                    <Tabs.Tab code={DFSiterativeCPP} language="cpp" />
                    <Tabs.Tab code={DFSiterativeRUBY} language="ruby" />
                    <Tabs.Tab code={DFSiterativeLUA} language="lua" />
                </Tabs>
            </section>
            <section id="tree-bfs">
                <Tabs title="BFS">
                    <Tabs.Tab code={BFSPY} language="python" />
                    <Tabs.Tab code={BFSJS} language="javascript" />
                    <Tabs.Tab code={BFSJAVA} language="java" />
                    <Tabs.Tab code={BFSCPP} language="cpp" />
                    <Tabs.Tab code={BFSRUBY} language="ruby" />
                    <Tabs.Tab code={BFSLUA} language="lua" />
                </Tabs>
            </section>
        </div>
    )
}
