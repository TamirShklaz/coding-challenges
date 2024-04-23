#  ABRACADABRA
# C, D
# (C,D), B, R
# ((C,D), B)[4],R[2]
#
# To create the huffman tree
# 1. Loop through the string and count the frequency of each character, create a freq map
# 2. Create a tree with the 2 lowest characters in order they appear in the string
# 3. Remove the 2 lowest characters from the freq map and add the new node to the freq map
# 4. Repeat
#
#
# Function Description
#
# Complete the function decode_huff in the editor below. It must return the decoded string.
#
# decode_huff has the following parameters:
#
# root: a reference to the root node of the Huffman tree
# s: a Huffman encoded string
#
# 1. Read the next character
# 2. 1  move right, 0 move left
# 3. Is it a leaf?
# 4. If not next char
# 5. If it is a leaf read add the char to a string
# 6. Back to root


"""class Node:
    def __init__(self, freq,data):
        self.freq= freq
        self.data=data
        self.left = None
        self.right = None
"""
import queue as Queue

# My solution
def decodeHuff(root, s):
	currentNode = root
	rootNode = root
	output = ""
	for char in s:
		if char == "1":
			currentNode = currentNode.right
		else:
			currentNode = currentNode.left

		if currentNode.left == None and currentNode.right == None:
			output += currentNode.data
			currentNode = rootNode

	print(output)
	return output




cntr = 0


class Node:
	def __init__(self, freq, data):
		self.freq = freq
		self.data = data
		self.left = None
		self.right = None
		global cntr
		self._count = cntr
		cntr = cntr + 1

	def __lt__(self, other):
		if self.freq != other.freq:
			return self.freq < other.freq
		return self._count < other._count


def huffman_hidden():  # builds the tree and returns root
	q = Queue.PriorityQueue()

	for key in freq:
		q.put((freq[key], key, Node(freq[key], key)))

	while q.qsize() != 1:
		a = q.get()
		b = q.get()
		obj = Node(a[0] + b[0], '\0')
		obj.left = a[2]
		obj.right = b[2]
		q.put((obj.freq, obj.data, obj))

	root = q.get()
	root = root[2]  # contains root object
	return root


def dfs_hidden(obj, already):
	if (obj == None):
		return
	elif (obj.data != '\0'):
		code_hidden[obj.data] = already

	dfs_hidden(obj.right, already + "1")
	dfs_hidden(obj.left, already + "0")



ip = input()
freq = {}#maps each character to its frequency

cntr = 0

for ch in ip:
    if(freq.get(ch) == None):
        freq[ch] = 1
    else:
        freq[ch]+=1

root = huffman_hidden()#contains root of huffman tree

code_hidden = {}#contains code for each object

dfs_hidden(root, "")

if len(code_hidden) == 1:#if there is only one character in the i/p
    for key in code_hidden:
        code_hidden[key] = "0"

toBeDecoded = ""


for ch in ip:
   toBeDecoded += code_hidden[ch]

print(toBeDecoded)

decodeHuff(root, toBeDecoded)











