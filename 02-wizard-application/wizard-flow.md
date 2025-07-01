# Wizard Flow Diagram

Below is a diagram of the wizard flow to help you understand the conditional logic required:

```
Start
  │
  ▼
┌─────────────┐
│    Step 1   │
│   Address   │
└─────────────┘
  │
  ▼
┌─────────────┐
│    Step 2   │
│   AC Units  │
└─────────────┘
  │
  ├─── 1 or 2 AC Units ───┐
  │                       ▼
  │                 ┌─────────────┐
  │                 │    Step 3   │
  │                 │ System Type │
  │                 └─────────────┘
  │                       │
  │                       ├─── Split or Package ───┐
  │                       │                        ▼
  │                       │                  ┌─────────────┐
  │                       │                  │    Step 4   │
  │                       │                  │ Heating Type│
  │                       │                  └─────────────┘
  │                       │                        │
  │                       │                        ▼
  │                       │                  ┌─────────────┐
  │                       │                  │    Step 5   │
  │                       │                  │   Contact   │
  │                       │                  └─────────────┘
  │                       │                        │
  │                       │                        ▼
  │                       │                  ┌─────────────┐
  │                       │                  │    Step 6   │
  │                       │                  │Confirmation │
  │                       │                  └─────────────┘
  │                       │
  │                       │
  │                       └─── "I don't know" ───┐
  │                                             ▼
  │                                       ┌─────────────┐
  │                                       │  Contact    │
  │                                       │   Page      │
  │                                       └─────────────┘
  │
  └─── More than 3 or "I don't know" ───┐
                                        ▼
                                  ┌─────────────┐
                                  │  Contact    │
                                  │   Page      │
                                  └─────────────┘
```

## Notes

1. **Step 1 (Address)**: All users start here.

2. **Step 2 (AC Units)**:
   - If the user selects "1" or "2", they proceed to Step 3.
   - If the user selects "More than 3" or "I don't know", they skip to the Contact Page.

3. **Step 3 (System Type)**:
   - If the user selects "Split" or "Package", they proceed to Step 4.
   - If the user selects "I don't know", they skip to the Contact Page.

4. **Step 4 (Heating Type)**: All users who reach this step proceed to Step 5.

5. **Step 5 (Contact Information)**: All users who reach this step proceed to Step 6.

6. **Step 6 (Confirmation)**: End of the wizard flow.

7. **Contact Page**: This is a special page for users who:
   - Have more than 3 AC units
   - Don't know how many AC units they have
   - Don't know their system type
   
   On this page, users provide their name and phone number, and are informed that someone will contact them.