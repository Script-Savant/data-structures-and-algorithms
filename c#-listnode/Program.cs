// 1. Creating a ListNode class
// A list node typically has: 
//  - a value field(stores data)
//  - a Next pointer(stores reference to the next node)
public class ListNode
{
    public int Value; // data stored in the node
    public ListNode? Next; // Pointer to the next node

    public ListNode(int value)
    {
        Value = value;
        Next = null;
    }
}

/*
2. Creating a Linked List using ListNodes
- A linked list is a collection of listnodes
*/
public class LinkedList
{
    public ListNode? Head; // First node in the list

    public LinkedList()
    {
        Head = null;
    }

    // traversing a linked list
    public void Traverse()
    {
        ListNode? current = Head;
        while (current != null)
        {
            Console.Write(current.Value + " -> ");
            current = current.Next;
        }
    }

    // Adding a Node
    // At the beginning
    public void AddFirst(int value)
    {
        ListNode newNode = new(value);
        newNode.Next = Head;
        Head = newNode;
    }

    // at the end
    public void AddLast(int value)
    {
        ListNode newNode = new(value);
        if (Head == null)
        {
            Head = newNode;
            return;
        }
        ListNode current = Head;
        while (current.Next != null)
        {
            current = current.Next;
        }

        current.Next = newNode;
    }

    // update a node
    public void Update(int oldValue, int newValue)
    {
        ListNode? current = Head;
        while (current != null)
        {
            if (current.Value == oldValue)
            {
                current.Value = newValue;
                return;
            }
            current = current.Next;
        }
        Console.WriteLine("Value no found");
    }

    // delete f irst node
    public void DeleteFirst()
    {
        if (Head != null) Head = Head.Next;
    }

    // delete last node
    public void DeleteLast()
    {
        if (Head == null || Head.Next == null)
        {
            Head = null;
            return;
        }

        ListNode current = Head;
        while (current.Next != null)
        {
            current = current.Next;
        }
        current.Next = null;
    }

    // Delete by value
    public void DeleteValue(int value)
    {
        if (Head == null) return;
        if (Head.Value == value)
        {
            Head = Head.Next;
            return;
        }

        ListNode current = Head;
        while (current.Next != null)
        {
            if (current.Next.Value == value)
            {
                current.Next = current.Next.Next;
                return;
            }
            current = current.Next;
        }
    }
}

public class Program
{
    public static void Main()
    {
        LinkedList list = new LinkedList();
        list.AddFirst(10);
        list.AddFirst(20);
        list.AddLast(30);

        list.Traverse(); // Output: 20 -> 10 -> 30 -> null
        Console.WriteLine();

        list.Update(10, 15);
        list.Traverse(); // Output: 20 -> 15 -> 30 -> null
        Console.WriteLine();

        list.DeleteValue(15);
        list.Traverse(); // Output: 20 -> 30 -> null
    }
}
