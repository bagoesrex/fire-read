import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LoginForm from "./login-form";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="py-8 [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center text-2xl">
            Fire Sign In
          </DialogTitle>
          <DialogDescription className="text-md flex items-center justify-center">
            Fill in the contact details below and click save.
          </DialogDescription>
        </DialogHeader>
        <LoginForm closeDialog={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}
